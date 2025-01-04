import AboutCard from "../components/AboutCard";
import AboutText from "../components/AboutText";


export default function AboutPage() {
  return (
    <>
        <h1 className="text-3xl lg:text-5xl font-bold text-center mt-10">I am full stack developer</h1>
        <div className="block lg:flex justify-center items-center w-full p-5 lg:p-20">
        <AboutCard />
        <AboutText />
    </div>
    </>
    
    
  );
}