import { useEffect, useRef, useState } from "react"

const SignUpLogIn = () => {
  const divInfo = useRef()
  const [divHeight, SetdivHeight] = useState(0)
  const [ShiftSignUp, SetShiftSignUp] = useState(false)
  
  
  // FUNCTIONS -----------------------
  const ChangeSignUpandSignInPage = () =>{
    if(ShiftSignUp == true){
      SetShiftSignUp(false)
    }
    else(
      SetShiftSignUp(true)
    )
  }


  const getDivDetail = () =>{
    if(divInfo.current){
      let info = divInfo.current.getBoundingClientRect()
      SetdivHeight(info.height - 121)
    }
  }

  window.addEventListener('resize',getDivDetail)
  
  useEffect(()=>{
    getDivDetail()
  })

  return (
    <>
      <div ref={divInfo} className="w-full min-h-[100dvh] pt-[100px] px-[20px] pb-[20px] flex">

        {/* LogIn & SignUp Container */}
        <div className="w-[50%] h-fit px-[20px] pt-[40px] flex flex-col 
        max-md:w-[100%]">
          
          {/* Login & SignIn Title */}
          {ShiftSignUp ? 
            (
              <>
                <h2 className="Trap-SB text-[3rem] leading-[3rem] tracking-tight
                 max-md:text-[2.5rem] max-md:leading-[2.5rem]">
                   Create New Account.
                </h2>
              </>
            ) 
            : 
            ( 
              <>
                <h2 className="Trap-SB text-[3rem] leading-[3rem] tracking-tight
                 max-md:text-[2.5rem] max-md:leading-[2.5rem]">
                  Login To Your Account.
                </h2>
              </>
            )
          }

          
          {/* SubTitle For Login & SignUp */}
          {ShiftSignUp ? 
            (
              <>
                <p className="Trap-M mt-[10px] text-[1.5rem] leading-[1.5rem] tracking-tight text-[#808080]
                max-md:text-[1.3rem] max-md:leading-[1.3rem] ">
                  Welcome, Start Your Blogging Journey Today.
                </p>
              </>
            )
            : 
            (
              <>
                <p className="Trap-M mt-[10px] text-[1.5rem] leading-[1.5rem] tracking-tight text-[#808080]
                max-md:text-[1.3rem] max-md:leading-[1.3rem] ">
                  Welcome again, Your thoughts are waiting to be shared.
                </p>
              </>
            )

          }


          {/* Login & SignUp Data */}
          <div className="w-full h-fit flex flex-col mt-[50px] gap-[30px]">

            {/* Name For SignUP */}
            {ShiftSignUp&&
              (
                <>
                {/* Full Name */}
                  <div className="w-full h-fit flex flex-col">
                    <p className="Trap-M text-[1.5rem] leading-[1.5rem] tracking-tighter pb-[7px]">Full Name</p>
                    <input className="w-full max-w-[600px] h-[45px] bg-[#f0f0f0] px-[10px] Trap-M" type="Text" name="Name" id="Name" placeholder="Enter Full Name Here" />
                  </div>

                </>
              )
            }

            {/* User-Name For SignUP  */}
            {ShiftSignUp &&
              (
                <>
                {/* USer Name  */}
                  <div className="w-full h-fit flex flex-col">
                    <p className="Trap-M text-[1.5rem] leading-[1.5rem] tracking-tighter pb-[7px]">User Name</p>
                    <input className="w-full max-w-[600px] h-[45px] bg-[#f0f0f0] px-[10px] Trap-M" type="Text" name="UserName" id="UserName" placeholder="Enter UserName Here" />
                  </div>

                </>
              )
            }

            {/* Email */}
            <div className="w-full h-fit flex flex-col">
              <p className="Trap-M text-[1.5rem] leading-[1.5rem] tracking-tighter pb-[7px]">Email</p>
              <input className="w-full max-w-[600px] h-[45px] bg-[#f0f0f0] px-[10px] Trap-M" type="email" name="email" id="email" placeholder="Enter Email Here" />
            </div>

            {/* Password */}
            <div className="w-full h-fit flex flex-col">
              <p className="Trap-M text-[1.5rem] leading-[1.5rem] tracking-tighter pb-[7px]">Password</p>
              <input className="w-full max-w-[600px] h-[45px] bg-[#f0f0f0] px-[10px] Trap-M" type="Password" name="password" id="password" placeholder="Enter Password Here" />
            </div>

          </div>


          {/* LOGIN & SIGNUP BTN */}
          {ShiftSignUp?
            ( 
              <>
              {/* SignUp BTN */}
              <div className="w-full h-[50px] max-w-[600px] bg-purple-600 mt-[50px] hover:bg-purple-800 select-none cursor-pointer flex justify-center items-center">
               <p className="Trap-M text-[1.3rem] leading-[1.3rem] tracking-tight text-[#f0f0f0]">SignUp</p>
              </div>
              </>
            ) 
            : 
            (
              <>
              {/* Login BTN */}
              <div className="w-full h-[50px] max-w-[600px] bg-purple-600 mt-[50px] hover:bg-purple-800 select-none cursor-pointer flex justify-center items-center">
                <p className="Trap-M text-[1.3rem] leading-[1.3rem] tracking-tight text-[#f0f0f0]">LogIn</p>
              </div>
              </>
            )

          }

          
          
          {/* OR */}
          <div className="w-full h-[2px] bg-[#dddddd] max-w-[600px] mt-[50px] relative select-none">
            <div className="w-fit h-fit absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff] px-[10px]">
              <p className="Trap-M text-[1rem] leading-[1rem] tracking-tight">or</p>
            </div>
          </div>


          {ShiftSignUp? 
            (
              <>
                <div onClick={ChangeSignUpandSignInPage} className="w-full max-w-[600px] flex justify-center items-center mt-[50px]">
                  <p className="Trap-M tracking-tight select-none cursor-pointer text-[#808080]">If Already have an account? <span className="Trap-SB text-purple-600 tracking-tight">LogIn Here</span></p>
                </div>
              </>
            )
            :
            (
              <>
                <div onClick={ChangeSignUpandSignInPage} className="w-full max-w-[600px] flex justify-center items-center mt-[50px]">
                  <p className="Trap-M tracking-tight select-none cursor-pointer text-[#808080]">If don't have an account? <span className="Trap-SB text-purple-600 tracking-tight">Sign Up Here</span></p>
                </div>
              </>
            )
          }




        </div>

        {/* Image Container */}
        <div className='w-[50%] bg-purple-500 rounded-[10px] 
        max-md:hidden ' 
        style={{ height: `${divHeight}px` }}></div>
       
      </div>
    </>
  )
}

export default SignUpLogIn
