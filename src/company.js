function Company(props) {

    const {companyName, companyNumEmployee, companyAddress} = props

    return (
      <div>
          <h1>Company component</h1>
          <h2> Company name {companyName}</h2>
          <h2>The number of employees is {companyNumEmployee}</h2>
          <h2>The address of the company is {companyAddress}</h2>
      </div>
    );
  }
  
  export default Company;