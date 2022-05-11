import { useState, useCallback, useEffect } from "react";
import Styles from "./CollectCardDetails.module.scss";
import { Formik, Form, FormikProps, Field } from "formik";
import * as Yup from "yup";
import Input from "../Input/Input";
import Icon from "../Icon";
import { formatString, creditCardType } from "../../helpers";
import Button from "../Button/Button";
import { countryCode } from "../../utils/countryCodes";
import { useStickyState } from "../../hooks";

interface CardDetailsProps {
  setShowInput: React.Dispatch<React.SetStateAction<Boolean>>;
  setCardDetails: React.Dispatch<React.SetStateAction<Object>>;
}
interface Values {
  fullname: string;
  cardnumber: string;
  securitycode: string;
  address: string;
  expirationdate: string;
  country: string;
  city: string;
  state: string;
  postalcode: string;
  phonenumber: string;
}

const applyBorder = {
  border: "1px solid red",
};

const applyColor = {
  color: "red",
};

const CardDetailsFormSchema = Yup.object().shape({
  fullname: Yup.string().required("*Required"),
  cardnumber: Yup.string()
    .matches(/^[0-9]*$/, "Only Digits is allowed")
    .max(16, "Must not be greater than 16 characters")
    // .min(16, "Must not be less than 16 characters")
    .required("*Required"),
  securitycode: Yup.string()
    .max(3, "Must not be greater than 3 characters")
    .matches(/^[0-9]*$/, "Only Digits is allowed")
    .required("*Required"),
  address: Yup.string().required("*Required"),
  expirationdate: Yup.string()
    .max(5, "Characters cannot be greater than 5")
    .min(5, "Characters cannot be lesser than 5")
    .required("*Required"),
  country: Yup.string().required("*Required"),
  city: Yup.string().required("*Required"),
  state: Yup.string().required("*Required"),
  postalcode: Yup.string()
    .matches(/^[0-9]*$/, "Only Digits is allowed")
    .required("*Required"),
  phonenumber: Yup.string()
    .matches(/^[0-9]*$/, "Only Digits is allowed")
    .required("*Required"),
});

const CollectCardDetails: React.FC<CardDetailsProps> = ({
  setShowInput,
  setCardDetails,
}) => {
  const [value, setValue] = useStickyState({}, "cardDetails");
  return (
    <div className={Styles["CollectCardDetails"]}>
      <header className={Styles["CollectCardDetails--acceptedCards"]}>
        <Icon iconName="citi" />
        <Icon iconName="americanExpress" />
        <Icon iconName="visa" />
        <Icon iconName="masterCard" />
        <Icon iconName="discover" />
        <Icon iconName="dinersClub" />
      </header>
      <Formik
        initialValues={{
          fullname: "",
          cardnumber: "",
          address: "",
          city: "",
          country: "",
          expirationdate: "",
          phonenumber: "",
          postalcode: "",
          securitycode: "",
          state: "",
        }}
        validationSchema={CardDetailsFormSchema}
        onSubmit={(values, action) => {
          // console.log("The values", values);
          // console.log("The action", action);
          setValue({
            cardDetails: values,
          });
          setCardDetails(values);

          setTimeout(() => {
            setShowInput(false);
            action.resetForm();
          }, 2000);
        }}
      >
        {(props: FormikProps<Values>) => {
          const expirationError =
            props.errors.expirationdate && props.touched.expirationdate;
          return (
            <Form className={Styles["CollectCardDetails__form"]}>
              <section className={Styles["CollectCardDetails__form--input"]}>
                <Input
                  label="Name on Card"
                  name="fullname"
                  placeholder="Enter Name on Card"
                  type="text"
                />
              </section>

              <section className={Styles["CollectCardDetails__form--input"]}>
                <Input
                  dataicon={
                    <Icon iconName={creditCardType(props.values.cardnumber)} />
                  }
                  label="Card Number"
                  name="cardnumber"
                  placeholder="Card Number"
                  type="text"
                />
              </section>

              <section className={Styles["CollectCardDetails__form--row"]}>
                <section
                  className={
                    Styles["CollectCardDetails__form--row-expirationDate"]
                  }
                >
                  <label style={expirationError ? applyColor : {}}>
                    {" "}
                    Expiration Date{" "}
                  </label>
                  <Field
                    name="expirationdate"
                    placeholder="MM/YY"
                    type="tel"
                    onChange={(e: any) => {
                      formatString(e);
                      props.setFieldValue("expirationdate", e.target.value);
                    }}
                    style={expirationError ? applyBorder : {}}
                  />

                  {expirationError ? (
                    <p className={Styles["errors"]}>
                      {props.errors.expirationdate}
                    </p>
                  ) : null}
                </section>

                {/*  */}
                <Input
                  label="Security Code"
                  name="securitycode"
                  placeholder="CVV"
                  type="text"
                />
                {/*  */}
              </section>

              <div className={Styles["CollectCardDetails__form--select"]}>
                <label htmlFor="account"> Country</label>
                <Field
                  as="select"
                  name="country"
                  onChange={(e: any) =>
                    props.setFieldValue("country", e.target.value)
                  }
                >
                  {/* <option> Select Country </option> */}
                  {countryCode.length === 0 ? (
                    <option> Fetching Countries... </option>
                  ) : (
                    countryCode.map((element, index) => {
                      return (
                        <option key={index} value={element.code}>
                          {element.name || "Country "}
                        </option>
                      );
                    })
                  )}
                </Field>
              </div>
              <section className={Styles["CollectCardDetails__form--input"]}>
                <Input
                  label="Address"
                  name="address"
                  placeholder="Enter Address"
                  type="text"
                  // onChange={handleCardChange}
                />
              </section>
              <div className={Styles["CollectCardDetails__form--row"]}>
                <Input
                  label="City"
                  name="city"
                  placeholder="Enter City"
                  type="text"
                  // onChange={handleCardChange}
                />
                <Input
                  label="State"
                  name="state"
                  placeholder="Enter State"
                  type="text"
                  // onChange={handleCardChange}
                />
              </div>
              <div className={Styles["CollectCardDetails__form--row"]}>
                <Input
                  label="Postal Code"
                  name="postalcode"
                  placeholder="Postal Code"
                  type="text"
                  // onChange={handleCardChange}
                />
                <Input
                  label="Phone Number"
                  name="phonenumber"
                  placeholder="Enter Phone Number"
                  type="tel"
                  // onChange={handleCardChange}
                />
              </div>

              <section className={Styles["CollectCardDetails__form--button"]}>
                <Button
                  type="submit"
                  label="Add Card"
                  disabled={!(props.dirty && props.isValid)}
                >
                  {" "}
                  Add Card{" "}
                </Button>
              </section>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CollectCardDetails;
