import { Container } from "react-bootstrap";
import servicesBasicsAction from "@/actions/servicesBasicsAction";
//import { useGetStatesDataQuery } from "@/redux/services/statesDataApi";
import ContainerCards from "@/components/containers/ContainerCards";
import SectionMainSearchServices from "@/components/section/SectionMainSearchServices";

export const metadata = {
  title: "Pagina de inicio",
  description: "descripcion x",
};

export default async function Home() {
  //const { data, error, isLoading, isFetching } = useGetStatesDataQuery(null);
  const responseStates = await servicesBasicsAction.getAllDestinations();
  const responseCategories = await servicesBasicsAction.getAllCategories();

  let categories = [];
  if (responseCategories.data.length > 0) {
    const auxCat = [...responseCategories.data];
    categories = auxCat.splice(0, 12);
  }

  return (
    <>
      <SectionMainSearchServices
        title={`Let's find your wedding team`}
        subTitle={`Search over 250,000 local professionals with reviews, pricing,
                availability, and more`}
        destinationList={responseStates}
        categoryList={responseCategories}
      />
      <ContainerCards categories={categories} />
      <Container>
        <div className="pb-4 mt-4 pt-4">
          <h2>Your Wedding Vendors are the Key to a Beautiful Big Day</h2>
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
      </Container>
      <Container>
        <div className="pb-4 mt-4 pt-4">
          <h2>Your Wedding Vendors are the Key to a Beautiful Big Day</h2>
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
      </Container>
      <Container>
        <div className="pb-4 mt-4 pt-4">
          <h2>Your Wedding Vendors are the Key to a Beautiful Big Day</h2>
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
      </Container>
      <Container>
        <div className="pb-4 mt-4 pt-4">
          <h2>Your Wedding Vendors are the Key to a Beautiful Big Day</h2>
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
      </Container>
      <Container>
        <div className="pb-4 mt-4 pt-4">
          <h2>Your Wedding Vendors are the Key to a Beautiful Big Day</h2>
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
      </Container>
      <Container>
        <div className="pb-4 mt-4 pt-4">
          <h2>Your Wedding Vendors are the Key to a Beautiful Big Day</h2>
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
      </Container>
      <Container>
        <div className="pb-4 mt-4 pt-4">
          <h2>Your Wedding Vendors are the Key to a Beautiful Big Day</h2>
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
      </Container>
    </>
  );
}
