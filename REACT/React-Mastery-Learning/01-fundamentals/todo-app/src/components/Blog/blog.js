function Blog(){



    return(
        <div>
            <form>
                <input name='title' placeholder='Title'/>
                <button disabled={isSaving}>{isSaving?'Saving...':'Save'}</button>
            </form>
        </div>
    )
}