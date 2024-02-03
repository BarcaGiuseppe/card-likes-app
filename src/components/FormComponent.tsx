import styled from "styled-components";

const FormContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#f5f5f5",
  margin: "10px",
  maxWidth: "600px",
  border: "2px black",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  padding: "20px",
}));

const InputTxt = styled.input(() => ({
  border: "1px solid black",
  borderRadius: "8px",
  backgroundColor: "white",
  color: "white",
  width: "500px",
  height: "50px",
  fontSize: "16px",
  margin: "10px",
}));

const InputUrl = styled.input(() => ({
  border: "1px solid black",
  borderRadius: "8px",
  backgroundColor: "white",
  color: "white",
  width: "350px",
  height: "50px",
  fontSize: "16px",
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
        <div>
          <InputUrl placeholder="Insert Url"></InputUrl>
          <ButtonInput>Aggiungi</ButtonInput>
        </div>
      </FormContainer>
    </div>
  );
};

export default FormComponent;
