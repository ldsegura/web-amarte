import LayoutBasic from '@/components/layouts/LayoutBasic'
import "../theme/boostrap-theme.scss";
import "../theme/main.scss";
import "mystique-web-components/dist/theme/main.scss";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <LayoutBasic>{children}</LayoutBasic>
  )
}
