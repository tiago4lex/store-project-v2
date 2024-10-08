import Footer from "./Footer";
import Header from "./Header";

export interface BodyProps {
  className?: string;
  children: any;
  noHeader?: boolean;
  noFooter?: boolean;
  noContainer?: boolean;
  noPadding?: boolean;
}
export default function Body(props: BodyProps) {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "black" }}>
      <div className="flex-1 flex flex-col w-screen">
        {props.noHeader ? null : <Header />}
        <main
          className={`
                    flex-1 flex flex-col ${props.className ?? ""}
                    ${props.noContainer ? "" : "container"}
                    ${props.noPadding ? "" : "py-10"}
                `}
        >
          {props.children}
        </main>
        {props.noFooter ? null : <Footer />}
      </div>
    </div>
  );
}
