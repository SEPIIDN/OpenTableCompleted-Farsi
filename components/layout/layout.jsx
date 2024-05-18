import Search from './search';
import Header from './header';
import MainContainer from './container';

function Layout(props) {
  return (
    <MainContainer>
      <Header />
      <Search />
      <main>{props.children}</main>
    </MainContainer>
  );
}

export default Layout;
<table>
  <tr>
    <th style="background-color:#e0e0e0; text-align:center; border:1px solid black;">روکش ورق MDF</th>
    <th style="background-color:#e0e0e0; text-align:center; border:1px solid black;">نوع کابینت/ ویژگی</th>
  </tr>
  <tr>
    <td style="border:1px solid black;">ورق ام دی اف خام</td>
    <td style="border:1px solid black;">بدون روکش / احتمال خراش و آسیب</td>
  </tr>
  <tr>
    <td style="border:1px solid black;">روکش ملامینه</td>
    <td style="border:1px solid black;">کابینت ام دی اف/ مقاوم در برابر سایش</td>
  </tr>
  <tr>
    <td style="border:1px solid black;">روکش پلکسی گلاس</td>
    <td style="border:1px solid black;">کابینت هایگلاس/ دارای براقیت و با دوام</td>
  </tr>
  <tr>
    <td style="border:1px solid black;">پی وی سی وکیوم شده</td>
    <td style="border:1px solid black;">کابینت ممبران/ مقاوم و ضدخش</td>
  </tr>
  <tr>
    <td style="border:1px solid black;">روکش چوب</td>
    <td style="border:1px solid black;">کابینت روکش چوب/ نمای چوب طبیعی</td>
  </tr>
</table>
