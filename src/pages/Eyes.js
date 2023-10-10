import Image from 'next/image';
import Gear from './gear.svg';
// import Eye from './eye.svg';
import Eye from "./eyeessss.svg";
import Circle from "./circle.svg";
// import  BiggBossLoading  from "./BiggBossLoading"

export default function Eyes() {
  return (
    <>
      <div className="flex  flex-col items-center justify-between ">
        <div class="ldoor"></div>
        <div class="rdoor"></div>
        <div className=' flex justify-center drishti_eye'>
          <div className="eye">
            <Image className='eyeImage' src={Eye} width="200" height="200" />
            {/* <img className='eyeImage' src="https://i.postimg.cc/KYKsNMRc/1210524.png" width="200" height="200" /> */}

          </div>
          <div className="gear">
            {/* <Image className='gearImg' src={Gear} width="200" height="200" /> */}
          </div>
        </div>
        {/* <BiggBossLoading /> */}
      </div>
      <style jsx global > {`
         .eye{
            position: absolute;
            top: 13rem;
            
        }
        
        
        .eyeImage{
        
        width: 30rem;
        }
        
        .gear{
            position: absolute;
            z-index: 1000;
            top: 13rem;
            animation: spin 6s linear infinite;
        }
        
        .gearImg{
            width: 20rem;
            
        
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        
        .drishti_eye{
         

            width: 100%;
            height: 100%;
            position: absolute;
            opacity: 0;
            animation: drishti_eye 2s alternate forwards ease-in-out;
            animation-delay: 0.5s;
           
        }
        
      

        @keyframes drishti_eye {
            from {
              left: 0%;
              opacity: 0;
            }
            to {
              opacity: 1;
              left: -25%;
            }
          }

          .ldoor {
            width: 50%;
            height: 100%;
            position: absolute;
            left: 0;
            animation: ldoor 2s normal forwards ease-in-out;
            background-image: url(https://i.postimg.cc/43t78vMw/row-1-column-1-2-1.webp);
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
          .rdoor {
            width: 50%;
            height: 100%;
            position: absolute;
            right: 0;
            animation: rdoor 2s normal forwards ease-in-out;
            background-image: url(https://i.postimg.cc/3NLdyt4r/row-1-column-2-2-1.webp);
          
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
          
          @keyframes ldoor {
            from {
              left: 0;
            }
            to {
              left: -50%;
            }
          }
          @keyframes rdoor {
            from {
              right: 0;
            }
            to {
              right: -50%;
            }
          }
        
          @media (max-width: 768px){
            .eye {
                position: absolute;
                top: 15rem;
                width: 15rem;
            }
            .gear {
                position: absolute;
                z-index: 1000;
                top: 15rem;
                width: 8rem;
            }
            @keyframes drishti_eye {
                from {
                  top: 0%;
                  opacity: 0;
                }
                to {
                  opacity: 1;
                  top: -10%;
                }
              }
            .ldoor {
                background-image: url(https://i.postimg.cc/k4mVL6PC/row-1-column-1-4-1.webp);
            }
            .rdoor {
                background-image: url(https://i.postimg.cc/FRVfvrhL/row-1-column-2-4-1.webp);
              }
          }

          `}</style >
    </>
  )
}
