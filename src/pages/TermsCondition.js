import React from 'react'

function TermsCondition() {
  return (
    <div className='m-0 h-screen p-0 bg-blue-950 text-white'>
      <div className='  container max-w-screen-md m-auto'>
        <h1 className='my-10'>Terms and Conditions</h1>
        <ol>
          <li>1. Events are conducted and right to decision is held by the MESA committee.</li>
          <li>2. Each event has its own rules and regulations that you need to follow. Failing it will lead to disqualification.
          </li>
          <li>3. The participant once enrolled in a competition cannot unenroll at any point of time under any conditions.
          </li>
          <li>4. Verification of each and every participant will be done, so provide the correct information to avoid inconvenience.
          </li>
          <li>5. The organizers will not be responsible for any network lag or disconnectivity issues. Participants have to manage the issues by themselves.
          </li>
          <li>
            6.  A confirmation mail will be sent on the provided Email ID after you register for an event containing the Unique Id. Kindly check for the same in the spam folder, if not received.

          </li>
          <li>7.Accomodation and traveling wont' be provided by MESA.
          </li>
          <li>8.In case of any mishaps, disputes and third party issues MESA will not be responsible for the same.
          </li>
          <li>
            9.  No refund will be provided after a successful registration in ANY event.

          </li>
        </ol>
      </div>
      <style jsx>{`
        ol {
          margin: 1rem 0;
          font-size: 1.2rem;
        }
        li {
          margin: 1rem 0;
        }
        h1{
          font-size: 2.5rem;
        }


        

      `}</style>
    </div>

  )
}

export default TermsCondition