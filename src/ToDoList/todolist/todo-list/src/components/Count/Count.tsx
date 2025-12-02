import React, { useEffect, useState } from "react";

export default function Count() {
    const [count, setCount] = useState<number>(0);

    useEffect(() => { // useEffect khi lên 4 chớp nhẹ
        // trên trình duyệt rồi paint thành 0
        // => khắc phục dùng useLayoutEffect thì thành 0 luôn nếu đạt === 4
        if(count === 4) 
            setCount((pre) => pre = 0)
    }, [count])

    const handleClick = () => {
        setCount(pre => pre + 1);
    }
    return (
        <>
            <h1>Count: {count}</h1>
            <br></br>
            <button onClick={handleClick}>Click to increase me!</button>
        </>
    )
}