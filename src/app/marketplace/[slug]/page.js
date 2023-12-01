import servicesBasicsAction from "@/actions/servicesBasicsAction";
import SectionLoadingPage from "@/components/section/SectionLoadingPage";
import { Container, Row, Col } from "react-bootstrap";
import GalleryContainer from "./components/GalleryContainer";
import ColMainDescription from "./components/ColMainDescription";
import BoxSocial from "@/components/ui/box/BoxSocial";

export async function generateMetadata({ params, _searchParams }, parent) {
  // fetch data
  //const product = await fetch(`https://.../${id}`).then((res) => res.json());

  return {
    title: `Pagina de ${params.slug}`,
    description: "descripcion x",
  };
}

const Page = async (props) => {
  const { params } = props;
  const responseBody = await servicesBasicsAction.getSellPageInformation({
    slug: params.slug,
  });
  console.log(responseBody);

  if (responseBody.data.length <= 0)
    return <SectionLoadingPage title={"Ups! ocurrio un error en la página"} />;
  const dataBody = responseBody.data[0];

  return (
    <>
      <Container className="p-4 page-sell">
        <Row>
          <Col>
            <Row>
              <GalleryContainer data={dataBody} />
              <Col xs={12} className="pt-4" id="about">
                <h2>Acerca de</h2>
                <div dangerouslySetInnerHTML={{ __html: dataBody.about }} />
              </Col>
              {dataBody.frequent_questions.length > 0 && (
                <Col xs={12} className="pt-4" id="faq">
                    <h2>Preguntas frecuentes</h2>
                    {dataBody.frequent_questions.map((item,i) => {
                        return (
                            <div key={i}>
                                <h5>{item.question}</h5>
                                <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                            </div>
                        )
                    })}
                </Col>
              )}
              <Col xs={12} className="pt-4">Promociones</Col>
              <Col xs={12} className="pt-4">Arte promocional Enlace</Col>
            </Row>
          </Col>
          <ColMainDescription data={dataBody} />
        </Row>
      </Container>
    </>
  );
};

export default Page;
