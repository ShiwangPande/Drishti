import Image from 'next/image';
import Gear from './gear.svg';
import Eye from './eye.svg';

// import  BiggBossLoading  from "./BiggBossLoading"

export default function Eyes() {
    return (
        <>
            <div className="flex  flex-col items-center justify-between p-24">

                <div className=' flex justify-center drishti_eye'>
                    <div className="eye">
                        <Image className='eyeImage' src={Eye} width="200" height="200" />

                    </div>
                    <div className="gear">
                        <Image className='gearImg' src={Gear} width="200" height="200" />
                    </div>
                </div>
                {/* <BiggBossLoading /> */}
            </div>
            <style jsx global > {`
         .eye{
            position: absolute;
            top: -8rem;
            
        
            
        }
        
        
        .eyeImage{
        
        width: 50rem;
        }
        
        .gear{
            position: absolute;
            z-index: 1000;
            top: 7rem;
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
            /* make it fade in and out */
            animation: fadeinout 4s linear infinite;
            width: 100%;
            height: 100%;
           
        }
        
        @keyframes fadeinout {
            0% { opacity: 0; 
                transform: scale(1,1);}
            50% { opacity: 1;
                transform: scale(1.2,1.2);  }
            100% { opacity: 0;
                transform: scale(1,1); }
          }
        
          @media (max-width: 768px){
            .eye {
                position: absolute;
                top: 0rem;
                width: 15rem;
            }
            .gear {
                position: absolute;
                z-index: 1000;
                top: 4.5rem;
            }
          }

          `}</style >
        </>
    )
}
