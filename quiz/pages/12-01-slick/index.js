import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src="http://newsimg.hankookilbo.com/2019/04/29/201904291390027161_3.jpg" />
          </div>
          <div>
            <img src="https://dimg.donga.com/ugc/CDB/WEEKLY/Article/5b/b3/22/85/5bb32285000ed2738de6.jpg" />
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/300px-Cat_November_2010-1a.jpg" />
          </div>
          <div>
            <img src="https://mblogthumb-phinf.pstatic.net/MjAyMTA0MTZfMTk4/MDAxNjE4NTMyNTIxMjg4.RERDApXu076pwmMaM0MUuxisGryYUdmX1rBL4qhT4YEg._eBUJPel7iItLxJ6zmdumbVLPaXTBYCjF7wLsVRkDVog.PNG.vet6390/%EC%83%88%EB%81%BC_%EA%B3%A0%EC%96%91%EC%9D%B4_%EC%9E%85%EC%96%91.PNG?type=w800" />
          </div>
        </Slider>
      </div>
    );
  }
}
