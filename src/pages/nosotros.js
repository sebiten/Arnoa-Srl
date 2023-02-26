import EmpresasTrabajadas from "@/components/EmpresasTrabajadas";
import HeroCarousel from "@/components/HeroCarrousel";
import Navbar from "@/components/NavBar";
import NuestroEquipo from "@/components/NuestroEquipo";
import SobreNosotros from "@/components/SobreNosotros";
import React from "react";

function nosotros() {
  return (
    <div>
      <Navbar />
      <SobreNosotros />
      <EmpresasTrabajadas />
      <NuestroEquipo/>
    </div>
  );
}

export default nosotros;
