import LazyLoad from "react-lazy-load";

export default function LazyLoadPage() {
  return (
    <div>
      귀여운 푸딩보세용
      <div className="filler" />
      <LazyLoad height={500}>
        <img src="/images/pd1.jpg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={500}>
        <img src="/images/pd2.jpg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={500}>
        <img src="/images/pd3.jpg" />
      </LazyLoad>
      <div className="filler" />
      <LazyLoad height={500}>
        <img src="/images/pd4.jpg" />
      </LazyLoad>
      <LazyLoad height={500}>
        <img src="/images/pd5.jpg" />
      </LazyLoad>
      <LazyLoad height={500}>
        <img src="/images/pd6.jpg" />
      </LazyLoad>
      <LazyLoad height={500}>
        <img src="/images/pd7.jpg" />
      </LazyLoad>
      <LazyLoad height={500}>
        <img src="/images/pd8.jpg" />
      </LazyLoad>
      <LazyLoad height={500}>
        <img src="/images/pd9.jpg" />
      </LazyLoad>
      <LazyLoad height={500}>
        <img src="/images/pd10.jpg" />
      </LazyLoad>
      <div className="filler" />
    </div>
  );
}
