import React from "react";
import "./style.css";

export const ExperiencedA = (): JSX.Element => {
  return (
    <div className="experienced-a">
      <div className="form-style">
        <div className="frame">
          <div className="icons-wrapper">
            <img className="icons" alt="Icons" src="/img/icons.svg" />
          </div>
          <div className="stepperui">
            <div className="variants">
              <div className="div">
                <div className="ellipse-radio" />
                <div className="frame-2">
                  <img className="polygon" alt="Polygon" src="/img/polygon.svg" />
                  <div className="element-wrapper">
                    <div className="element">경험 50%</div>
                  </div>
                </div>
              </div>
              <div className="rectangle" />
            </div>
            <div className="variants">
              <div className="group" />
              <div className="rectangle" />
            </div>
            <div className="variants">
              <div className="group" />
              <div className="rectangle" />
            </div>
            <div className="variants">
              <div className="group" />
              <div className="rectangle" />
            </div>
            <div className="group-wrapper">
              <div className="group-2" />
            </div>
          </div>
        </div>
        <div className="frame-3">
          <div className="bot-box">
            <div className="bot-box-title">
              <img className="logo" alt="Logo" src="/img/logo-6.svg" />
              <div className="text">
                <div className="rimi">Rimi’s Advice</div>
              </div>
            </div>
            <div className="text-wrapper">
              <div className="div-wrapper">
                <p className="p">
                  개인 브랜딩의 여정에서 가장 중요한 단계는 바로 &#39;자신을 알아가는 것&#39;이에요. 철학적이거나
                  비유적인 의미가 아니라, 진짜로 &#39;자신을 알아가는 것&#39; 말이에요.
                  <br />
                  <br />
                  자신을 진정성 있게 만드는 요소 파악하기 <br />
                  자신의 강점과 역량 파악하기 <br />
                  다른 사람과 차별화되는 요소 파악하기
                  <br />
                  <br />
                  그래야만 채용 담당자, 고객, 투자자 또는 비즈니스 파트너가 여러분을 진지하게 받아들일 수 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="frame-4">
            <div className="text-2">
              <div className="text-wrapper-2">🔎</div>
            </div>
            <div className="text-2">
              <p className="rimi">
                {" "}
                ${"{"}field{"}"}와 관련된 <br />
                경험에 대해 이야기해 주세요!
                <br />
                어떤 일을 했나요?
              </p>
            </div>
            <div className="text-2">
              <p className="element-2">
                프로젝트에서 작은 앱을 만들어 본 경험이거나, <br />
                친구들과 함께 기획한 작은 이벤트, <br />
                혹은 스케치북에 그린 디자인 아이디어 같은 것들 말이에요!
              </p>
            </div>
          </div>
          <div className="input">
            <div className="frame-5">
              <div className="input-box">
                <div className="text-wrapper-3">내용을 입력해주세요.</div>
              </div>
              <p className="element-3"> 최소 20자 | 최대 300자</p>
            </div>
          </div>
          <div className="button-wrapper">
            <div className="button">
              <div className="text-3">다했어요!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
