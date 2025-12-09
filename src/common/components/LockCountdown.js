import { memo } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import styled from "styled-components";

const Countdown = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginBottom: "5px",
  justifyContent: "center",
  alignItems: "center",
  "& > DIV > DIV:nth-of-type(even)": {
    marginLeft: "4px",
    marginRight: "4px",
  },
  "& > DIV > DIV:nth-of-type(odd) > DIV:nth-of-type(2)": {
    marginRight: "2px",
  },
});

const LockCountdown = ({ to }) => {
  return (
    <Countdown>
      {to?.toUTCString() && (
        <FlipClockCountdown
          digitBlockStyle={{
            fontFamily: "var(--fractul-regular)",
            width: "20px",
            height: "30px",
            fontSize: "30px",
          }}
          labelStyle={{
            fontSize: "12px",
            fontFamily: "var(--fractul-regular)",
            color: "gray",
          }}
          separatorStyle={{
            size: "3px",
          }}
          to={to?.toUTCString()}
        />
      )}
    </Countdown>
  );
};

export default LockCountdown;
