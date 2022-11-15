import * as React from "react"

function Pinterest(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={25}
            height={25}
            viewBox="0 0 50.141 50.141"
            xmlSpace="preserve"
            {...props}
        >
            <path d="M44.092 12.485c-.76-2.567-1.98-4.728-3.732-6.606-1.713-1.837-3.684-3.23-6.026-4.259C31.666.451 28.573-.117 25.618.02c-1.078.049-2.131.106-3.163.255-2.908.416-5.469 1.283-7.828 2.65-3.011 1.748-5.362 4.124-6.987 7.064-.844 1.53-1.675 4.228-2.028 5.99-.418 2.078-.05 5.681.789 7.713 1.048 2.533 1.91 3.656 4.013 5.223.013.009 1.313.945 2.179.931 1.577-.03 1.891-1.539 2.041-2.264.028-.137.056-.272.089-.399.029-.112.067-.232.106-.357.223-.72.526-1.706.023-2.58a4.933 4.933 0 00-.61-.807c-.107-.122-.215-.24-.302-.37-.748-1.111-1.127-2.501-1.127-4.131 0-2.139.484-4.077 1.481-5.923 1.808-3.349 4.808-5.462 8.677-6.114 2.202-.369 4.768-.214 6.693.402 1.759.564 3.256 1.561 4.33 2.886 1.137 1.402 1.787 3.18 1.931 5.286.094 1.344-.028 2.698-.129 3.597-.389 3.461-1.396 6.247-2.994 8.282-1.309 1.67-2.72 2.507-4.315 2.561-1.027.04-1.795-.17-2.489-.667-.655-.467-1.045-1.043-1.229-1.81-.208-.876.043-1.784.31-2.746l.043-.154c.233-.846.477-1.619.716-2.38.376-1.199.766-2.438 1.087-3.876.363-1.623.411-2.934.148-4.005-.324-1.33-1.039-2.326-2.125-2.962-1.149-.67-2.777-.799-4.144-.329-2.037.695-3.591 2.545-4.264 5.075a11 11 0 00-.293 4.006c.113 1.076.354 2.054.799 3.235l-.047.157a6.557 6.557 0 00-.083.294c-.479 2-.945 3.972-1.41 5.94-.441 1.869-.883 3.735-1.334 5.62l-.102.422c-.462 1.92-.938 3.906-1.049 6.277l-.05.99c-.098 1.842-.197 3.747.05 5.509.049.344.157 1.115.916 1.384.227.17.445.242.657.242.635 0 1.2-.645 1.681-1.192 1.569-1.784 2.903-4.037 4.079-6.885.526-1.274.875-2.645 1.212-3.971l.203-.79c.246-.944.487-1.901.726-2.848l.016-.063c.443.388.955.738 1.548 1.063 1.255.695 2.671 1.1 4.207 1.203 1.44.098 2.956-.087 4.629-.567a13.645 13.645 0 003.617-1.636c4.054-2.596 6.817-7.137 7.781-12.786.289-1.688.412-3.045.412-4.537-.002-1.718-.207-3.282-.613-4.643zm-1.772 8.847c-.869 5.088-3.315 9.15-6.889 11.438a11.66 11.66 0 01-3.09 1.398c-1.446.416-2.738.577-3.942.495-1.261-.085-2.364-.398-3.379-.96-1.015-.555-1.673-1.158-2.135-1.955l-1.226-2.118-1.105 4.337c-.237.941-.477 1.893-.722 2.832l-.205.802c-.335 1.315-.65 2.558-1.123 3.7-1.053 2.552-2.229 4.571-3.589 6.163-.106-1.355-.026-2.875.052-4.352l.051-1.002c.101-2.182.556-4.073.995-5.902l.103-.425c.451-1.886.893-3.755 1.335-5.625.465-1.967.93-3.937 1.408-5.932.014-.056.034-.122.055-.191.12-.403.245-.82.076-1.243-.429-1.099-.655-1.976-.756-2.932a9.011 9.011 0 01.238-3.282c.498-1.873 1.583-3.22 2.979-3.696a3.257 3.257 0 011.056-.169c.567 0 1.093.136 1.431.333.607.356.997.914 1.19 1.71.185.756.133 1.797-.156 3.094-.304 1.355-.663 2.5-1.044 3.713a69.946 69.946 0 00-.735 2.446l-.042.152c-.308 1.109-.656 2.366-.328 3.744.298 1.248.956 2.22 2.011 2.974 1.048.749 2.278 1.084 3.72 1.039 2.191-.074 4.149-1.193 5.821-3.325 1.831-2.332 2.978-5.458 3.409-9.295.108-.978.241-2.452.137-3.957-.174-2.524-.972-4.68-2.373-6.408-1.319-1.627-3.143-2.848-5.273-3.531-2.211-.709-5.137-.891-7.635-.471-4.5.758-7.994 3.225-10.106 7.136-1.158 2.146-1.721 4.394-1.721 6.873 0 2.036.493 3.801 1.467 5.247.134.2.294.386.46.574.149.17.29.33.376.479.061.163-.113.727-.197.998-.047.153-.092.3-.128.437-.042.16-.078.331-.114.503-.039.188-.099.479-.162.639a5.016 5.016 0 01-.904-.504c-1.797-1.338-2.456-2.199-3.358-4.382-.677-1.641-1.013-4.888-.677-6.556.375-1.869 1.174-4.248 1.818-5.417 1.447-2.619 3.546-4.739 6.239-6.301 2.133-1.236 4.457-2.022 7.109-2.401.943-.137 1.943-.19 2.971-.237 2.65-.125 5.429.385 7.819 1.433 2.088.917 3.844 2.157 5.367 3.792 1.536 1.646 2.607 3.546 3.277 5.81.351 1.177.528 2.55.528 4.078-.001 1.373-.116 2.629-.384 4.2z" />
        </svg>
    )
}

export default Pinterest