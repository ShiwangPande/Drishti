import React from 'react'

function TermsCondition() {
  return (
    <div className='m-0 p-0 bg-blue-950 text-white'>
      <div className='  container max-w-screen-md m-auto'>
        <h1 className='my-10'>Terms and Conditions</h1>
        1. Events are conducted and right to decision is held by the MESA committee.
        <br />
        2. Each event has its own rules and regulations that you need to follow. Failing it will lead to disqualification.
        <br />
        3. The participant once enrolled in a competition cannot unenroll at any point of time under any conditions.
        <br />
        4. Verification of each and every participant will be done, so provide the correct information to avoid inconvenience.
        <br />
        5. The organizers will not be responsible for any network lag or disconnectivity issues. Participants have to manage the issues by themselves.
        <br />
        6. A confirmation mail will be sent on the provided Email ID after you register for an event containing the Unique Id. Kindly check for the same in the spam folder, if not received.
        <br />
        7. Accomodation and traveling wont' be provided by MESA.
        <br />
        8. In case of any mishaps, disputes and third party issues MESA will not be responsible for the same.
        <br />
        9. No refund will be provided after a successful registration in ANY event.
        <br />
      </div>
      <style jsx>{`
        h1 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 1rem 0;
        }
        p {
          margin: 1rem 0;
        }
        ul {
          margin: 1rem 0;
        }
        li {
          margin: 0.5rem 0;
        }

        

      `}</style>
    </div>

  )
}

export default TermsCondition