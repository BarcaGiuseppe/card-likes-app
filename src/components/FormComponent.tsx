import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { utilityAddDataCardToLS } from "../utility";

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

const ButtonInput = styled.button<{ disabled: boolean }>((props) => ({
  borderRadius: "8px",
  background: "#0f09d6",
  color: "white",
  fontSize: "1em",
  margin: "1em",
  padding: "0.25em 1em",
  border: "2px solid black",
  cursor: props.disabled ? "no-drop" : "pointer",
  opacity: props.disabled ? 0.6 : 1,
}));

const FormComponent = ({ submit }: { submit: () => void }): JSX.Element => {
  const [titleValue, setTitleValue] = useState<string>("");
  const [urlValue, setUrlValue] = useState<string>("");
  const [descrValue, setDescrValue] = useState<string>("");

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitleValue(event.target.value);
  };

  const handleChangeUrl = (event: ChangeEvent<HTMLInputElement>): void => {
    setUrlValue(event.target.value);
  };

  const handleChangeDescr = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setDescrValue(event.target.value);
  };
  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };
  const isButtonDisabled = !titleValue || !isValidUrl(urlValue);

  const handleClickButt = (): void => {
    utilityAddDataCardToLS({
      url: urlValue,
      title: titleValue,
      description: descrValue,
    });
    setTitleValue("");
    setDescrValue("");
    setUrlValue("");
    submit();
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <FormContainer>
        <InputTxt
          placeholder="Insert Title"
          onChange={handleChangeTitle}
          value={titleValue}
        ></InputTxt>
        <InputUrl
          placeholder="Insert Url"
          onChange={handleChangeUrl}
          value={urlValue}
        ></InputUrl>
        <InputDescription
          placeholder="Insert Description"
          onChange={handleChangeDescr}
          value={descrValue}
        ></InputDescription>
        <ButtonInput onClick={handleClickButt} disabled={isButtonDisabled}>
          Aggiungi
        </ButtonInput>
      </FormContainer>
    </div>
  );
};

export default FormComponent;
