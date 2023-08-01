import { Column, Entity, PrimaryColumn, CreateDateColumn } from "typeorm"
import { v4 as uuidV4 } from "uuid"

@Entity("specifications")
class Specification {
  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }

  @PrimaryColumn()
  id?: string

  @Column()
  name: string

  @Column()
  description: string

  @CreateDateColumn()
  created_at: Date
}

export { Specification }