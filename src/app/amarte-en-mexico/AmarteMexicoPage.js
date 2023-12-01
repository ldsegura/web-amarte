import React from "react";
import { Container, Row } from "react-bootstrap";
import SecctionDirectorCollapse from "@/components/section/SecctionDirectorCollapse";
import Image from "next/image";
import directivosData from "../../data/directivosData";
import imageResponsive from "../../assets/profile-cover.jpg";

const AmarteMexicoPage = () => {
  return (
    <>
      <Container className="pb-4">
        <div className="pb-4 mt-4 pt-4">
          <h1>
            Amarte <span className="text-primary">México</span>
          </h1>
          <p>
            {`Choosing wedding vendors and wedding services for your ceremony and
            reception can be a daunting task. Finding the best vendors that fit
            into your budget takes time. Your first choices may already be
            booked. And you may not even be sure what the wedding of your dreams
            looks like yet. But every successful wedding day is the result of a
            team of professionals working together to take a couple's vision and
            turn it into reality. Don't think of researching and interviewing
            wedding vendors as a chore. Instead, think of it as the first step
            in your wedding planning journey - and one of the most important
            steps overall.`}
          </p>
        </div>
        <div className="pb-4">
          <Image
            src={imageResponsive}
            alt="imagen representariva"
            className="mx-auto d-block img-fluid"
            style={{ minHeight: 500 }}
            placeholder="blur"
          />
        </div>
      </Container>
      <SecctionDirectorCollapse data={directivosData} />
    </>
  );
};

export default AmarteMexicoPage;
