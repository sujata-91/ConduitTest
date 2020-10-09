class article {
    title(value) {
        const field = cy.get('input[placeholder~=Article]')
        field.clear()
        field.type(value)
        return this
    }
    description(value) {
        const field = cy.get('input[formcontrolname=description]')
        field.clear()
        field.type(value)
        return this
    }
    text(value) {
        const field = cy.get('textarea[formcontrolname=body]')
        field.clear()
        field.type(value)
        return this

    }
    tags(value) {
        const field = cy.get('input[placeholder~=Enter]')
        field.clear()
        field.type(value)
        return this
    }
    submit() {
        const button = cy.get('.btn')
        button.click()
    }
}
export default article