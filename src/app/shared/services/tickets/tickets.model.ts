export class Ticket {
    public id: string
    public name: string
    public active: boolean

    constructor(
        id: string,
        name: string,
        active: boolean
    ) {
        this.id = id
        this.name = name
        this.active = active
    }
}