import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

declare const window: typeof globalThis & {
  IMP: any;
};
// IMP의 typescript 오류 해결. 뭔지 모르니 any로 설정

export default function PaymentPage() {
  const router = useRouter();
  const [amount, setAmount] = useState(0);
  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출

    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        //   merchant_uid: "ORD20180131-0000011",
        //   상품아이디가 중복되면 에러 발생. 그래서 알고리즘 사용하거나 주석처리해서 자동생성되도록 해야함
        name: "노르웨이 회전 의자",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/quiz06/payment/complete",
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          router.push("/quiz06/payment/complete");
          // 백엔드에 결제관련 데이터 넘겨주기(뮤테이션 실행하기)
          // 예: createPointTransactionOfLoading
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
  return (
    <div>
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
      <select onChange={onChangeValue}>
        <option selected disabled>
          충전금액선택
        </option>
        <option value={500}>500</option>
        <option value={1000}>1000</option>
        <option value={2000}>2000</option>
        <option value={5000}>5000</option>
      </select>

      <button onClick={requestPay}>충전하기</button>
    </div>
  );
}
