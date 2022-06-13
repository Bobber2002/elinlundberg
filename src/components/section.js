const Section = ( {cfp, children} ) => {
  return ( 
    <section id="Section" className={`w-[100vw] sm:h-[100vh] ${cfp} flex flex-col`}>
        {children}
    </section>
   );
}
 
export default Section;