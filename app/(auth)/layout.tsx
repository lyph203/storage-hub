import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-bg-brand">
      <section className="hidden w-1/2 items-center justify-center bg-brand p-10 lg:flex xl:w-2/5">
        <div className="flex max-h-[800x] max-w-[430px] flex-col justify-center space-y-12">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-brand.png"
              alt="logo"
              width={60}
              height={60}
              className="h-auto"
            />
            <h1 className="h2 text-white">Storage Hub</h1>
          </div>
          <div className="space-y-5 text-white">
            <h1 className="h1">Manage your files the easy way!</h1>
            <p className="body-1">
              This is a centralized hub for all your storage needs.
            </p>
          </div>
          <Image
            src="/assets/images/files.png"
            alt="illustration"
            width={342}
            height={342}
            className="transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>
      <section
        className="flex-1 flex flex-col items-center bg-white p-4 py-10 lg:justify-center
      lg:p-10 lg:py-10 mt-40 lg:mt-0"
      >
        <div className="flex items-center gap-3 mb-16 lg:hidden">
            <Image
            src={"/assets/icons/logo-brand.svg"}
            alt="logo"
            width={50}
            height={50}
            className="h-auto w-[50px] lg:w-[50px]"
          />
            <h1 className="h2 text-brand">Storage Hub</h1>
          </div>
        {children}
      </section>
    </div>
  );
};

export default Layout;
