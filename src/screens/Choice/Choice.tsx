import React from "react";
import "./style.css";

export const Choice = (): JSX.Element => {
  return (
    <div className="choice">
      <div className="frame">
        <div className="icons-wrapper">
          <img className="icons" alt="Icons" src="/img/icons.svg" />
        </div>
        <div className="div">
          <div className="frame-2">
            <img className="logo" alt="Logo" src="/img/logo-5.svg" />
            <div className="frame-3">
              <div className="text">
                <div className="rimi">어떤 일에 관심 있으신가요?</div>
              </div>
              <div className="text">
                <p className="element">아직 경험이 없어도 괜찮아요. 관심 있는 분야를 선택해주세요.</p>
              </div>
            </div>
          </div>
          <div className="frame-4">
            <div className="frame-5">
              <div className="button-group">
                <div className="frame-6">
                  <div className="toggle-button">
                    <img className="paint-kit-dynamic" alt="Paint kit dynamic" src="/img/paint-kit-dynamic-color.png" />
                    <div className="text-wrapper">디자인</div>
                  </div>
                  <div className="toggle-button">
                    <img
                      className="paint-kit-dynamic"
                      alt="Paint kit dynamic"
                      src="/img/paint-kit-dynamic-color-1.png"
                    />
                    <div className="text-wrapper">개발</div>
                  </div>
                </div>
                <div className="frame-6">
                  <div className="toggle-button">
                    <img
                      className="paint-kit-dynamic"
                      alt="Paint kit dynamic"
                      src="/img/paint-kit-dynamic-color-2.png"
                    />
                    <div className="text-wrapper-2">기획</div>
                  </div>
                  <div className="toggle-button-2">
                    <img
                      className="paint-kit-dynamic"
                      alt="Paint kit dynamic"
                      src="/img/paint-kit-dynamic-color-3.png"
                    />
                    <div className="text-wrapper-3">목록에 없어요</div>
                  </div>
                </div>
              </div>
              <div className="frame-7">
                <div className="text">
                  <div className="element-2">이 중에서 선택해보세요!</div>
                </div>
                <div className="frame-8">
                  <div className="chip">
                    <div className="text-2">🪧마케팅</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-3">🎭예술&amp;엔터</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-3">💼비즈니스</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-3">💡R&amp;D</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-3">📰언론</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-3">🏥의료</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-3">🚀공학&amp;과학</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-3">📚교육</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-3">✈️항공&amp;물류</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-3">🚓공무원</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-3">⚖️법</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-3">🍳요리</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-3">💪스포츠</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-3">🌾농축업</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-3">🏠건설&amp;부동산</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-7">
              <div className="text">
                <div className="element-3">아직 방향을 정하지 못했어요</div>
              </div>
              <div className="button">
                <div className="text-4">선택하기</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
