import React, { useState, Fragment } from "react";
import Container from "common/components/Container";
import Section, { RcCollapse } from "./faq.style";
import { Panel } from "rc-collapse";
import motion from "./motion-util";
import { QAData } from "common/data";
import Typography from "common/components/Typography";

const Plus = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 36.74 36.74"
    >
      <g id="md-add" transform="translate(-96 -96)">
        <path
          id="Path_11351"
          data-name="Path 11351"
          d="M132.74,116.819H116.819V132.74h-4.9V116.819H96v-4.9h15.921V96h4.9v15.921H132.74Z"
          fill="#fff"
        />
      </g>
    </svg>
  );
};

const Minus = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="4.899"
      viewBox="0 0 36.74 4.899"
    >
      <path
        id="Path_11351"
        data-name="Path 11351"
        d="M132.74,116.819H96v-4.9h36.74Z"
        transform="translate(-96 -111.921)"
        fill="#fff"
      />
    </svg>
  );
};

const Faq = () => {
  const [activeKey, setActiveKey] = useState(1);

  const onChange = (activeKey) => {
    setActiveKey(activeKey);
  };

  return (
    <Section id="faq">
      <Container className="container">
        <RcCollapse
          className="rc-right"
          collapsible={undefined}
          accordion={true}
          activeKey={activeKey}
          onChange={onChange}
          openMotion={motion}
        >
          {QAData.faqs?.map((faq, i) => {
            if (i % 2 === 0) {
              return (
                <Panel
                  key={faq.id}
                  showArrow={false}
                  header={
                    <Fragment>
                      <Typography as="h4">{faq.title}</Typography>
                      <span className="icon">
                        <div className="minus">
                          <Minus />
                        </div>
                        <div className="plus">
                          <Plus />
                        </div>
                      </span>
                    </Fragment>
                  }
                >
                  {faq.description}
                </Panel>
              );
            }
          })}
        </RcCollapse>
        <RcCollapse
          className="rc-right"
          collapsible={undefined}
          accordion={true}
          activeKey={activeKey}
          onChange={onChange}
          openMotion={motion}
        >
          {QAData.faqs?.map((faq, i) => {
            if (i % 2 !== 0) {
              return (
                <Panel
                  key={faq.id}
                  showArrow={false}
                  header={
                    <Fragment>
                      <Typography as="h4">{faq.title}</Typography>
                      <span className="icon">
                        <div className="minus">
                          <Minus />
                        </div>
                        <div className="plus">
                          <Plus />
                        </div>
                      </span>
                    </Fragment>
                  }
                >
                  {faq.description}
                </Panel>
              );
            }
          })}
        </RcCollapse>
      </Container>
    </Section>
  );
};

export default Faq;
