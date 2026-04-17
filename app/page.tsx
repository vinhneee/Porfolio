'use client';

import dynamic from 'next/dynamic';
import { Footer } from "@/components/footer";
import { Grid } from "@/components/grid";
import { FloatingNav } from "@/components/ui/floating-nav";
import { RecentProjects } from "@/components/recent-projects";
import { navItems } from "@/data";

const App = dynamic(() => import('@/components/band/App'), { ssr: false });
const CardSection = dynamic(() => import('@/components/card/CardSection'), { ssr: false });


const MainPage = () => {
  return (
    
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
      <FloatingNav navItems={navItems} />
  
      <div style={{ minHeight: "100vh", width: "100vw", backgroundColor: "black" }}>
      <App />
      
</div>  

      <div className="w-full max-w-7xl">
        <Grid/> 
        <CardSection />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
};

export default MainPage;
