import { useState } from "react";
import { Modal, Button } from "antd";
import Head from "next/head";
import { gql, useMutation, useQuery } from "@apollo/client";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      amount
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        amount
      }
    }
  }
`;

export default function ReloadPoint() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  // 모달
  const [isVisible, setIsVisible] = useState(false);
  const showModal = () => {
    setIsVisible(true);
  };
  const [reloadPoint] = useMutation(CREATE_POINT_TRANSACTION_OF_LOADING);

  // 충전
  const [amount, setAmount] = useState(0);
  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    setIsVisible(false);
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        //   merchant_uid: "ORD20180131-0000011",
        //   상품아이디가 중복되면 에러 발생. 그래서 알고리즘 사용하거나 주석처리해서 자동생성되도록 해야함
        name: `포인트 ${amount}원 충전`,
        amount: amount,
        buyer_email: `${data?.fetchUserLoggedIn.email}`,
        buyer_name: `${data?.fetchUserLoggedIn.name}`,
        buyer_tel: "정보없음",
        buyer_addr: "정보없음",
        buyer_postcode: "정보없음",
        // 로그인유저 패치해서 정보 가져옴
        m_redirect_url: "http://localhost:3000/useditem",
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,

          reloadPoint({
            variables: {
              impUid: rsp.imp_uid,
            },
          });

          // 백엔드에 결제관련 데이터 넘겨주기(뮤테이션 실행하기)
          // 예: createPointTransactionOfLoading
          alert(`포인트 ${amount}원 충전 완료`);
        } else {
          // 결제 실패 시 로직,
          alert("결제 실패!");
        }
      }
    );
  };
  const onChangeValue = (event) => {
    setAmount(event.target.value);
    console.log(event.target.value);
  };
  //   결제

  return (
    <>
      <Head>
        {/* <!-- jQuery --> */}

        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>

        {/* <!-- iamport.payment.js --> */}

        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <Button type="primary" onClick={showModal}>
        포인트 충전하기
      </Button>
      {isVisible && (
        <Modal title="충전하실 금액을 선택해주세요." visible={true} footer={[]}>
          <select onChange={onChangeValue}>
            <option selected disabled>
              충전금액선택
            </option>

            <option value={1000}>1000</option>
            <option value={2000}>2000</option>
            <option value={5000}>5000</option>
            <option value={10000}>10000</option>
            <option value={20000}>20000</option>
            <option value={50000}>50000</option>
          </select>

          <button onClick={requestPay}>충전하기</button>
        </Modal>
      )}
    </>
  );
}

// {
//     "data": {
//       "createUser": {
//         "_id": "62663d14a8255b002988c672",
//         "email": "123@321.com",
//         "name": "테스트"
//       }
//     }
//   }
