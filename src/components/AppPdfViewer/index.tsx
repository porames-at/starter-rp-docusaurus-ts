import {
  RPLayout,
  RPLayoutProps,
  RPPages,
  RPProvider,
  RPProviderProps,
} from "@react-pdf-kit/viewer";
import React, { type FC } from "react";

interface IProps {
  showToolbar: boolean;
  providerProps: Omit<RPProviderProps, "src">;
  defaultLayoutProps: RPLayoutProps;
}

const DEFAULT_PDF_URL =
  "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf";

const AppPdfViewer: FC<Partial<IProps>> = (props) => {
  const { showToolbar = true, providerProps, defaultLayoutProps } = props;
  return (
    <div>
      <RPProvider src={DEFAULT_PDF_URL} {...providerProps}>
        {showToolbar ? (
          <RPLayout toolbar {...defaultLayoutProps}>
            <RPPages />
          </RPLayout>
        ) : (
          <div style={{ width: "100%", height: "550px" }}>
            <RPPages />
          </div>
        )}
      </RPProvider>
    </div>
  );
};

export default AppPdfViewer;
