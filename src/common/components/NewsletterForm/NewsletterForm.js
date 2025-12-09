import { decode } from "html-entities";
import Input from "../Input";
import { Controller, useForm } from "react-hook-form";
import Text from "../Text";
import NewsletterFormWrapper, {
  CountDownNewsletterFieldButtonWrapper,
  CountdownNewsletterFormWrapper,
} from "./NewsletterForm.style";
import Button from "../Button";
import Typography from "../Typography";
import SuccessCheckmark from "common/assets/success-checkmark.svg";
import Image from "next/image";
import { flex } from "styled-system";
import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

const BottomFormWrapper = styled("div")`
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${themeGet("mediaQueries.sm")} {
    min-height: 80px;
  }
`;

const StyledButton = styled(Button)`
  height: 40px;
  width: 78px;

  ${themeGet("mediaQueries.sm")} {
    height: 40px;
    width: 78px;
  }
`;

const StyledText = styled(Text)`
  width: 225px;

  ${themeGet("mediaQueries.sm")} {
    width: 245px;
  }
`;

const NewsletterForm = ({ status, message, onValidated }) => {
  const { control, handleSubmit, watch } = useForm({
    mode: "onChange",
  });

  const values = watch();

  const onSubmit = () => {
    onValidated({
      EMAIL: values.email,
      // FNAME: values.name,
    });
    return true;
  };

  const onError = () => {
    // error
  };

  const getMessage = (message) => {
    if (!message) {
      return null;
    }

    // const linkRx = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/;
    // console.log(message.match(linkRx));
    try {
      const msg = message.split("<a")[0];

      const result = msg?.split("-") ?? null;

      if ("0" !== result?.[0]?.trim()) {
        return decode(msg);
      }

      const formattedMessage = result?.[1]?.trim() ?? null;
      return formattedMessage ? decode(formattedMessage) : null;
    } catch {
      return "Invalid input!";
    }
  };

  return (
    <>
      {status !== "success" ? (
        <>
          <NewsletterFormWrapper
            mt={{
              _: "40px",
              md: "0px",
            }}
            alignItems={{
              _: "center",
              md: "flex-start",
            }}
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit, onError)}
            className="d-flex newsletter-input-fields"
          >
            <Controller
              name="email"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { name, value, onChange } }) => {
                return (
                  <Input
                    required
                    isMaterial
                    defaultValue={value || ""}
                    name={name}
                    value={value || ""}
                    onChange={onChange}
                    placeholder="Your email address"
                    inputStyles={{
                      width: {
                        _: "245px",
                        lg: "280px",
                        xxl: "320px",
                      },
                    }}
                  />
                );
              }}
            />
            <div className="submit-btn">
              <Button
                isLoading={status === "sending"}
                type="submit"
                title="Submit"
                variant="roundOutlined"
                fontWeight="bold"
                size="normal"
                colors="primary"
                mt={{
                  _: "33px",
                  md: "40px",
                  xxl: "56px",
                }}
              />
            </div>
            <div
              className="newsletter-form-info"
              style={{
                width: "100%",
                marginTop: "4px",
              }}
            >
              {status === "error" ? (
                <Text
                  style={{
                    position: "absolute",
                    color: "red",
                    margin: 0,
                  }}
                  className="newsletter-form-error"
                  dangerouslySetInnerHTML={{ __html: getMessage(message) }}
                />
              ) : null}
            </div>
          </NewsletterFormWrapper>
        </>
      ) : (
        <Text
          className="manifesto-title"
          color="white"
          content="**Your subscription was successful**"
        />
      )}
    </>
  );
};

export const CountDownNewsletterForm = ({ status, message, onValidated }) => {
  const { control, handleSubmit, watch } = useForm({
    mode: "onChange",
  });

  const values = watch();

  const onSubmit = () => {
    onValidated({
      EMAIL: values.email,
      // FNAME: values.name,
    });
    return true;
  };

  const onError = () => {
    // error
  };

  const getMessage = (message) => {
    if (!message) {
      return null;
    }

    // const linkRx = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/;
    // console.log(message.match(linkRx));
    try {
      const msg = message.split("<a")[0];

      const result = msg?.split("-") ?? null;

      if ("0" !== result?.[0]?.trim()) {
        return decode(msg);
      }

      const formattedMessage = result?.[1]?.trim() ?? null;
      return formattedMessage ? decode(formattedMessage) : null;
    } catch {
      return "Invalid input!";
    }
  };

  return (
    <BottomFormWrapper>
      {status !== "success" ? (
        <>
          <CountdownNewsletterFormWrapper
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit, onError)}
            className="d-flex newsletter-input-fields"
          >
            <CountDownNewsletterFieldButtonWrapper
              alignItems={{
                _: "center",
                md: "flex-start",
              }}
              style={{
                padding: "5px",
                borderRadius: "12px",
                border: "1.5px solid #82FBFB",
                background: "#0F1319",
                boxShadow: "0px 0px 16px 0px rgba(20, 200, 236, 0.64)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Controller
                name="email"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { name, value, onChange } }) => {
                  return (
                    <Input
                      required
                      isMaterial
                      defaultValue={value || ""}
                      name={name}
                      value={value || ""}
                      onChange={onChange}
                      placeholder="your email"
                      inputStyles={{
                        outline: "none",
                        paddingLeft: "15px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        width: { _: "130px", sm: "150px" },
                        height: "40px",
                        marginRight: "5px",
                        color: "white",
                        border: "none",
                        borderRight: "none",
                        borderTopLeftRadius: "12px",
                        borderBottomLeftRadius: "12px",
                        boxShadow: "0px 16px 80px 0px #2E90FA",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    />
                  );
                }}
              />
              <div className="submit-btn">
                <StyledButton
                  isLoading={status === "sending"}
                  disabled={!values.email}
                  type="submit"
                  title="I'm in"
                  variant="formFieldAdj"
                  fontWeight="bold"
                  size="normal"
                  colors="formFieldAdj"
                  margin="0"
                  style={{
                    fontWeight: "normal",
                    textTransform: "none",
                    margin: "0px 0px 0px 5px",
                    marginLeft: "0",
                    border: "none",
                    borderRadius: "8px",
                    padding: "0px 5px",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                />
              </div>
            </CountDownNewsletterFieldButtonWrapper>
            <div className="newsletter-form-info">
              {status === "error" ? (
                <StyledText
                  style={{
                    position: "absolute",
                    color: "red",
                    margin: 0,
                    marginTop: "5px",
                    fontSize: "12px",
                  }}
                  className="newsletter-form-error"
                  dangerouslySetInnerHTML={{ __html: getMessage(message) }}
                />
              ) : null}
            </div>
          </CountdownNewsletterFormWrapper>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Image
            alt="success-checkmark"
            src={SuccessCheckmark.src}
            height={48}
            width={48}
          ></Image>
          <Typography color="white" fontSize="18px">
            Subscribed
          </Typography>
        </div>
      )}
    </BottomFormWrapper>
  );
};

export default NewsletterForm;
