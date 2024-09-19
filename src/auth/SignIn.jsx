import React, { useEffect } from "react";
import logo from "../assets/Group 9283.svg";
import { Link, Outlet } from "react-router-dom";
import arrow from "/src/assets/Line 13.svg";
import log from "/src/assets/🦆 icon _google_.svg";
import arrowRight from "/src/assets/Line 16.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinSchema } from "../lib/ValidationSchema";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signinSchema),
  });
  const onSubmit = (data) => console.log(data);
  useEffect(() => {
    document.title = "Sign in";
  });
  return (
    <>
      <main className="sign-in-container  justify-content-center d-flex gap-4 align-items-center  ">
        <div className="main-form">
          <div className="d-lg-flex d-none form-h2">
            <Link className="text-decoration-none d-flex gap-2" to="/">
              <img src={logo} alt="logo" />
              <h2 className="logo-name mt-2">Perfume House</h2>
            </Link>
          </div>
          <div className="form-bg p-md-5 my-md-5 container">
            <div className="d-flex gap-1 row">
              <h3 className="form-h3">welcome back</h3>
              <p className="form-p">
                Fill in your information to access your account.{" "}
              </p>
            </div>
            <form
              className="d-flex row  align-items-center justify-content-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="d-flex gap-5"></div>
              <div className="d-flex row mt-3">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="input-details"
                  {...register("email")}
                />
                <p className="text-danger">{errors.email?.message}</p>
              </div>
              <div className="d-flex row my-3">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input-details"
                  {...register("password")}
                />
                <p className="text-danger">{errors.password?.message}</p>
              </div>

              <div className="d-flex gap-3">
                <input type="checkbox" className="checkbox" />
                <p className="mt-3 p-checkbox">
                  I agree to <b>Terms of Service</b> and <b>Privacy Policies</b>
                </p>
              </div>
              <button className="btn-form sign">Sign in</button>
            </form>
            <div>
              <div className="d-flex algin-items-center justify-content-center gap-2">
                <img src={arrow} alt="" />
                <p className="mt-3">or</p>
                <img src={arrowRight} alt="" />
              </div>
              <Link to={"https://accounts.google.com/"}>
                <button className="btn-form google">
                  <img src={log} alt="googleicon" className="me-2 mb-1" />
                  Continue with Google
                </button>
              </Link>
              <p className="last-form-p">
                Already have an account?{" "}
                <Link className="text-decoration-none" to="/auth/signup">
                  <b>Sign up</b>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Outlet />
    </>
  );
};

export default SignIn;
