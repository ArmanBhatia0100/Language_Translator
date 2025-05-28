const copyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);
    alert("Copied to clipboard");
}

export { copyToClipboard };
