import Container from "./Container";
import Logo from "./Logo";

const Footer = () => {
  return (
      <div className="bg-base-200 text-base-content py-12">
          <Container>
              <footer className="footer sm:footer-horizontal ">
                  <aside>
                      <Logo />
                      <div className="mt-6 flex gap-3">
                          <a
                              href="#"
                              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm transition hover:border-[#00d991]/40 hover:bg-[#00d991]/10 hover:text-[#00d991]"
                          >
                              GH
                          </a>

                          <a
                              href="#"
                              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm transition hover:border-[#00d991]/40 hover:bg-[#00d991]/10 hover:text-[#00d991]"
                          >
                              X
                          </a>

                          <a
                              href="#"
                              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm transition hover:border-[#00d991]/40 hover:bg-[#00d991]/10 hover:text-[#00d991]"
                          >
                              in
                          </a>
                      </div>
                  </aside>
                  <nav>
                      <h6 className="footer-title">Services</h6>
                      <a className="link link-hover">Branding</a>
                      <a className="link link-hover">Design</a>
                      <a className="link link-hover">Marketing</a>
                      <a className="link link-hover">Advertisement</a>
                  </nav>
                  <nav>
                      <h6 className="footer-title">Company</h6>
                      <a className="link link-hover">About us</a>
                      <a className="link link-hover">Contact</a>
                      <a className="link link-hover">Jobs</a>
                      <a className="link link-hover">Press kit</a>
                  </nav>
                  <nav>
                      <h6 className="footer-title">Legal</h6>
                      <a className="link link-hover">Terms of use</a>
                      <a className="link link-hover">Privacy policy</a>
                      <a className="link link-hover">Cookie policy</a>
                  </nav>
              </footer>
          </Container>
      </div>
  );
};

export default Footer;