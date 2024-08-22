
interface InputProps{
    placeholder: string,
    value: string,
    changeValue: (value: string) => void
}


export function input({ ...props }: InputProps){
    return(
        <TextInput
            placeholder={props.placeholder}
            onChangeText={(newText: any) => props.changeValue(newText)}
            defaultValue={props.value}
        />
    )
}