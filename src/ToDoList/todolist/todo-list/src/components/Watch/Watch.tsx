import React, { useEffect, useRef, useState } from "react";

function Time() {
    const [second, setSecond] = useState<number>(0);

    // có thể dùng useRef : nhớ đọc thêm các lưu khi sử dụng với cái này
    const intervalRef = useRef<any>(null);

    useEffect(() => { // tuy rằng việc ẩn time đi
        // nhưng ông setInterval này vẫn chạy ngầm => memory leak
        // dùng như thế này để clear không cho chạy nữa.
        // const intervalId = setInterval(() ......)

        intervalRef.current = setInterval(() => {
            console.log('setInterval đang chạy ngầm!');
            setSecond((pre) => {
                return pre + 1;
            })
        }, 1000)

        return () => {
            clearInterval(intervalRef.current);
            console.log('Đã dừng interval chạy ngầm!');
        }
    }, [])
    return (
        <>
            Time is: {second}
        </>
    )
}

export default function Watch() {
    const [visible, setVisible] = useState<boolean>(true);
    return (
        // button để unmount cái time đi (ẩn á)
        <>
            <button onClick={() => setVisible((pre) => !pre)}>Hide time!</button>
            <br /> <br />
            {visible && <Time />}
        </>
    )
}