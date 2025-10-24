
export default function PM(){

    return (
        <div className="pt-[140px] flex justify-center ">

            <div className="max-w-[1289px] min-w-[732px] flex flex-col justify-center bg-[url('/gray_element_wow.svg')] bg-bottom-left bg-no-repeat">
                <div className="h-[411px] flex flex-col justify-between items-start">
                    <h1 className="font-bold text-[72px] text-[#212529]">Project <br /> Management</h1>
                    <p className="text-[18px] text-[#212529]">Images, videos, PDFs and audio files are supported. Create math expressions and <br />diagrams directly from the app. Take photos with the mobile app and save them <br />to a note.</p>
                    <button className="bg-[#4F9CF9] w-[227px] h-[60px] text-[18px] rounded-[8px] text-white font-medium flex justify-center gap-2.5 items-center">Get started <img src="right_arrow.svg" alt="right_arrow" /></button>
                </div>
            </div>
    
            <img
            src="/vi_2.svg"
            alt="illustration"
            className="max-w-[748px] min-h-[547px]"
            />
            
        </div>
    );
}