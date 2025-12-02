import React from "react";
import style from "./title.module.scss";

type TypeProps = {
  address: {
    street: string;
  },
  header: (value: any) => void
};

function Title(props: TypeProps) {
  console.log("useMemo:", props.address.street);
  console.log(
    "Re-render mỗi lần thay đổi 1 kí tự nhỏ trong input nếu export default bình thường."
  );
  return (
    // <> // useMemo
    //   <h1 className={style.h1} onClick={() => props.header(100)}>To do list typescript</h1>
    // </> // bên dưới là useCallBack
    <>
      <h1 className={style.h1} onClick={() => props.header(200)}>To do list typescript</h1>
    </>
  );
}
// Khắc phục tình trạng dùng React memo
// nhưng nếu thêm 1 const object bên TaskInput thì
// cứ const address mới -> rerender nên dùng useMemo
// khắc phục tình trạng phải thêm 1 func
// hình như func kiểm tra pre.addre... === vlaueNew.addre...

export default React.memo(Title);
