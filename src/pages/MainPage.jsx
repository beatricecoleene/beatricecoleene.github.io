import DefaultLayout from "../layouts/DefaultLayout";
import HeroSection from "../components/section/HeroSection";
import AboutMeInfoSection from "../components/section/AboutMe2Section";
import ProjectsSection from "../components/section/ProjectsSection";
import SkillsSection from "../components/section/SkillsSection";
import ContactSection from "../components/section/ContactSection";



// data
import portfolioInfo from "../data/portfolio_info.json";


export default function MainPage() {
  // console.log(portfolioInfo)
  return (
    <DefaultLayout>

     

        <main className="flex  flex-col gap-4 justify-center items-center">
          
          <HeroSection data={portfolioInfo.Hero} />
          <AboutMeInfoSection data={portfolioInfo.AboutMe}/>
          <ProjectsSection data={portfolioInfo.Projects}/>
          <SkillsSection data={portfolioInfo.Skills}/>
          <ContactSection/>

          
          
          
        </main>
      
      
    </DefaultLayout>
  );
}