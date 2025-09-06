import logo from '../data/logo/logo.svg'
import { LuFilePenLine } from "react-icons/lu";
import { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import { FaUser } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { BiSolidDashboard } from "react-icons/bi";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { IoCloseSharp } from "react-icons/io5";

gsap.registerPlugin(useGSAP);

const UserNavbar = () => {

    const {UserLoginStatus} = useContext(AppContext)
    const [menuStatus, SetMenuStatus] = useState(false)
    const menuTL = gsap.timeline()



    const HandelMenuBTN =() => {
        if(menuStatus == false){
            SetMenuStatus(true)
            menuTL.to('.MENU-Cont',{
                right:'2%',
                duration:0.5,
                ease:'power3.inOut'
            })
            
        }
        else{
            SetMenuStatus(false)
             menuTL.to('.MENU-Cont',{
                right:'-100%',
                duration:0.5,
                ease:'power3.inOut'
            })
        }
        
    }


    return (
        <>
            <div className="w-full h-fit pt-[20px] flex items-center relative
            max-md:px-[20px] md:px-[40px]">

                {/* Logo */}
                <div className="w-fit h-[30px] flex justify-center items-center gap-[7px] select-none cursor-pointer">
                    <img className='h-full' src={logo} alt="Logo" />
                    <p className='Trap-M tracking-tight text-[1.5rem] leading-[1.5rem] text-[#202020]'>BlogEver</p>
                </div>

                {/* Nav-Bar */}
                <div className='w-fit h-fit ml-auto flex gap-[7px]'>

                    {/* Wirte BTN */}
                    <div className=' w-fit h-fit px-[12px] py-[12px] bg-[#ebebeb] text-[#202020] select-none cursor-pointer flex justify-center items-center gap-[7px] rounded-[4px] max-md:rounded-full hover:bg-[#202020] hover:text-[#f5f5f5] active:bg-[#202020] active:text-[#f5f5f5]'>
                        <p className='Trap-M text-[1rem] tracking-tight leading-[1rem] max-md:hidden'>Write</p>
                        <LuFilePenLine className='text-[1rem] '/>
                    </div>

                    {/* Log-In BTN */}
                    {UserLoginStatus !== true && (
                        <div className=' w-fit h-fit px-[15px] py-[12px] bg-[#202020] text-[#f3f3f3] select-none cursor-pointer flex justify-center items-center gap-[7px] rounded-[4px]'>
                            <p className='Trap-M text-[1rem] tracking-tight leading-[1rem]'>SignIn</p>
                        </div>
                    )}

                    {/* UserProfile */}
                    {UserLoginStatus == true && (
                        <div onClick={HandelMenuBTN} className='w-[38px] h-[38px] bg-[#202020] flex justify-center items-center rounded-full select-none cursor-pointer'>
                            {menuStatus?
                            (
                                <>
                                   {/* Menu Cancle Icon */}
                                  <IoCloseSharp className='text-[#f5f5f5] text-[24px]' />
                                </>
                            )
                            :
                            (
                                <>
                                   {/* User Icon */}
                                  <FaUser className='text-[#f5f5f5]'/>
                                </>
                            )
                            }
                        </div>
                    )}

                </div>
                
                {/* Menu */}
                <div className='MENU-Cont w-[170px] h-fit p-[7px] flex flex-col gap-[7px] absolute top-[130%] right-[-100%] bg-[#ebebeb] rounded-[4px] z-[99]'>

                    {/* User Profile */}
                    <div className='w-full h-fit bg-[#fff] text-[#202020] flex justify-center items-center  select-none cursor-pointer py-[12px] px-[7px] gap-[7px] hover:bg-[#202020] hover:text-[#f5f5f5] rounded-[4px] active:bg-[#202020] active:text-[#f5f5f5]'>
                        <FaUser/>
                        <p className='Trap-M text-[1rem] leading-[1rem] tracking-tight '>Profile</p>
                    </div>

                    {/* Dashboard */}
                    <div className='w-full h-fit bg-[#fff] text-[#202020] flex justify-center items-center  select-none cursor-pointer py-[12px] px-[7px] gap-[7px] hover:bg-[#202020] hover:text-[#f5f5f5] rounded-[4px] active:bg-[#202020] active:text-[#f5f5f5]'>
                        < BiSolidDashboard/>
                        <p className='Trap-M text-[1rem] leading-[1rem] tracking-tight '>Dashboard</p>
                    </div>

                    {/* LogOut */}
                    <div className='w-full h-fit bg-[#b83939] text-[#f5f5f5] flex justify-center items-center  select-none cursor-pointer py-[12px] px-[7px] gap-[7px] hover:bg-[#922020] rounded-[4px] active:bg-[#922020]'>
                        <HiOutlineLogout className='text-[1rem]' />
                        <p className='Trap-M text-[1rem] leading-[1rem] tracking-tight '>LogOut</p>
                    </div>

                </div>


            </div>
        </>
    )
}

export default UserNavbar