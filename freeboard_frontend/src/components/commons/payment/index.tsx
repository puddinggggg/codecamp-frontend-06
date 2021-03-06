import { useState } from "react";
import Head from "next/head";

declare const window: typeof globalThis & {
  IMP: any;
};
// IMP의 typescript 오류 해결. 뭔지 모르니 any로 설정

export default function Payment(props) {
  const [amount, setAmount] = useState(0);

  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp02614431"); // Example: imp00000000
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        //   merchant_uid: "ORD20180131-0000011",
        //   상품아이디가 중복되면 에러 발생. 그래서 알고리즘 사용하거나 주석처리해서 자동생성되도록 해야함
        name: props.name,
        amount: props.amount,
        buyer_email: props.email || "",
        buyer_name: props.buyer || "",
        buyer_tel: props.phonenumber || "",
        buyer_addr: props.address || "",
        buyer_postcode: props.zipcode || "",
        m_redirect_url: "http://localhost:3000/28-01-payment",
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);

          // 백엔드에 결제관련 데이터 넘겨주기(뮤테이션 실행하기)
          // 예: createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
          alert("결제 실패!");
        }
      }
    );
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
      <button onClick={requestPay}>결제하기</button>
    </div>
  );
}
