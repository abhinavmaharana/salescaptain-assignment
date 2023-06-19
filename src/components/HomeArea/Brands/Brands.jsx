import BrandCards from "../../../shared/components/BrandCards/BrandCards"

function Brands() {
  return (
    <div className="justify-center items-center text-center space-y-4 mt-4">
        <h1 className="text-6xl">Trusted by 100,000+ local businesses globally</h1>
        <div className="grid grid-cols-7 gap-6 p-12">
            <BrandCards 
                brandImg="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cad44fb711e700c0a1_Group%2018530.webp"
                styles={{}}
                className=""
            />
            <BrandCards 
                brandImg="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969c99e10c822b37179e8_Group%2018532.webp"
                styles={{}}
                className=""
            />
            <BrandCards 
                brandImg="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cae70f01d34820d129_Group%2018531.webp"
                styles={{}}
                className=""
            />
            <BrandCards 
                brandImg="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969ca4e2bcd235bf57982_Group%2018533.webp"
                styles={{}}
                className=""
            />
            <BrandCards 
                brandImg="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969ca47165b7b29cd5bfa_Group%2018534.webp"
                styles={{}}
                className=""
            />
            <BrandCards 
                brandImg="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cb054ce48a81f23d47_Group%2018535.webp"
                styles={{}}
                className=""
            />
            <BrandCards 
                brandImg="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969caa274fa886bbafd69_Group%2018536.webp"
                styles={{}}
                className=""
            />
        </div>
    </div>
  )
}

export default Brands