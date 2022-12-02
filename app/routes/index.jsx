import SectContact from "~/components/sectContact"
import SectFooter from "~/components/sectFooter"
import SectHeader from "~/components/sectHeader"
import SectNav from "~/components/sectNav"
import SectProjects from "~/components/sectProjects"
import SectSkins from "~/components/sectSkins"




function Index() {
  return (
    <div>
      <div className="container">
        <SectNav/>
        <SectHeader/>
        <SectProjects/>
        <SectSkins/>
        <SectContact/>
      </div>
        <SectFooter/>
    </div>
  )
}

export default Index
