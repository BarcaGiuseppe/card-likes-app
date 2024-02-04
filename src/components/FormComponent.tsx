import styled from "styled-components";

const FormContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#4590e6",
  maxWidth: "600px",
  width: "600px",
  margin: "10px",
  border: "2px black",
  borderRadius: "8px",
  boxShadow: "2px 2px 10px 2px rgba(0, 0, 0, 0.3)",
  padding: "20px",
}));

const InputTxt = styled.input(() => ({
  border: "1px solid black",
  borderRadius: "8px",
  backgroundColor: "white",
  width: "100%",
  height: "50px",
  fontSize: "16px",
  margin: "10px",
}));

const InputUrl = styled.input(() => ({
  border: "1px solid black",
  borderRadius: "8px",
  backgroundColor: "white",
  width: "100%",
  height: "50px",
  fontSize: "12px",
  margin: "10px",
}));

const InputDescription = styled.textarea(() => ({
  border: "1px solid black",
  borderRadius: "8px",
  backgroundColor: "white",
  width: "100%",
  height: "50px",
  fontSize: "12px",
  margin: "10px",
}));

const ButtonInput = styled.button(() => ({
  borderRadius: "8px",
  background: "#717D7E",
  color: "white",
  fontSize: "1em",
  margin: "1em",
  padding: "0.25em 1em",
  border: "2px solid black",
}));

const FormComponent = (): JSX.Element => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <FormContainer>
        <InputTxt placeholder="Insert Title"></InputTxt>
        <InputUrl placeholder="Insert Url"></InputUrl>
        <InputDescription placeholder="Insert Description"></InputDescription>
        <ButtonInput>Aggiungi</ButtonInput>
      </FormContainer>
    </div>
  );
};

export default FormComponent;
