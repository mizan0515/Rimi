import React from "react";
import "./style.css";

export const Choice = (): JSX.Element => {
  return (
    <div className="choice">
      <div className="frame-45">
        <div className="img-wrapper">
          <img className="icons-2" alt="Icons" src="/img/icons.svg" />
        </div>
        <div className="frame-46">
          <div className="frame-47">
            <img className="logo-6" alt="Logo" src="/img/logo-5.svg" />
            <div className="frame-48">
              <div className="text-21">
                <div className="rimi-9">어떤 커리어를 쌓고 싶으신가요?</div>
              </div>
              <div className="text-21">
                <p className="element-19">아직 명확하게 방향을 정하지 않았거나, 경험이 없어도 괜찮아요.</p>
              </div>
            </div>
          </div>
          <div className="frame-49">
            <div className="button-group">
              <div className="frame-50">
                <div className="toggle-button">
                  <img className="paint-kit-dynamic" alt="Paint kit dynamic" src="/img/paint-kit-dynamic-color.png" />
                  <div className="text-wrapper-12">디자인</div>
                </div>
                <div className="toggle-button-2">
                  <img className="paint-kit-dynamic" alt="Paint kit dynamic" src="/img/paint-kit-dynamic-color-1.png" />
                  <div className="text-wrapper-12">개발</div>
                </div>
              </div>
              <div className="frame-50">
                <div className="toggle-button">
                  <img className="paint-kit-dynamic" alt="Paint kit dynamic" src="/img/paint-kit-dynamic-color-2.png" />
                  <div className="text-wrapper-13">기획</div>
                </div>
                <div className="toggle-button-3">
                  <img
                    className="paint-kit-dynamic-2"
                    alt="Paint kit dynamic"
                    src="/img/paint-kit-dynamic-color-3.png"
                  />
                  <div className="text-wrapper-14">아직 없어요</div>
                </div>
              </div>
            </div>
            <div className="frame-51">
              <div className="text-21">
                <div className="element-20">방향은 정했지만 목록에 없어요</div>
              </div>
              <div className="button-8">
                <div className="text-22">선택하기</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
