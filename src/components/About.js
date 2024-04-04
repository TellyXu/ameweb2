import SectionTitle from "./SectionTitle";

const About = ({ minHeight }) => {
  return (
    <section
      className="about wrapper"
      style={minHeight ? { minHeight: "100vh" } : null}
    >
      <SectionTitle title="About US" />
      <p>
        American Ethane was one of the first US companies who signed a major ethane
        sale contract in China. Since opening a regional office in Shanghai in 2015,
        AEC has arranged and participated in multiple specialized Conferences, including
        a first-in-kind ethane-dedicated US-China Clean Energy Conference in Beijing in
        May 2016 with over 300 delegates from petrochemical companies, chemical research
        and planning institutes, Government Authorities.
      </p>

    </section>
  );
};

export default About;
