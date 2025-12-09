import Typography from "common/components/Typography";

export default function Custom404() {
  return (
    <Typography
      as="h2"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        position: "absolute",
        transform: "translate(-50%, -50%)",
        left: "50%",
        top: "50%",
      }}
    >
      404 - Page Not Found!
    </Typography>
  );
}
