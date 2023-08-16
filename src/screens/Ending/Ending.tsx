import React from "react";
import "./style.css";

export const Ending = (): JSX.Element => {
  return (
    <div className="ending">
      <div className="frame-15">
        <div className="frame-16">
          <img className="logo-3" alt="Logo" src="/img/logo-3.svg" />
          <div className="text-wrapper-7">Rimi</div>
        </div>
        <div className="frame-17">
          <div className="element-icon">
            <img className="paper" alt="Paper" src="/img/paper.png" />
          </div>
          <div className="frame-18">
            <div className="text-8">
              <p className="rimi-3">
                ${"{"}name{"}"}님의 퍼스널 브랜딩 <br />
                페이지가 완성되었어요!
              </p>
            </div>
            <div className="text-8">
              <p className="element-9">
                앞으로 업데이트 될 Rimi와도 함께해요!
                <br />
                노션에 로그인하고 오른쪽 상단에 복제하기를 눌러주세요!
                <br />
                복제하여 저장한 뒤, 오른쪽 상단의 <br />
                공유-&gt; 게시 -&gt; 웹에 게시 를 통해 웹페이지로 게시할 수 있어요!
              </p>
            </div>
          </div>
        </div>
        <div className="frame-19">
          <div className="button-3">
            <div className="text-9">생성된 노션 페이지로 이동하기</div>
          </div>
          <div className="button-4">
            <div className="text-9">노션 링크 복사하기</div>
          </div>
        </div>
      </div>
    </div>
  );
};
