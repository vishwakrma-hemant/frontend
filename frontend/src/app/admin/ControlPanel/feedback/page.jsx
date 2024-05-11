'use client'
import React, { useEffect, useState } from 'react';
import { Avatar, Badge, Table, Group, Text, ActionIcon, Anchor, rem, Button, Container } from '@mantine/core';
import { IconPencil, IconPlus, IconTrash } from '@tabler/icons-react';

const data = [
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    name: 'Hemant Kumar',
    email: 'rob_wolf@gmail.com',
    review: 'Good',
    rating: '5',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
    name: 'Junaid Usmani',
    email: 'bhorsefighter@gmail.com',
    review: 'Excellent',
    rating: '5',
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Mohammad Mubassir',
    email: 'jeremy@foot.dev',
    review: 'Very Good',
    rating: '4',
  },
];

const jobColors = {
  engineer: 'blue',
  manager: 'cyan',
  designer: 'pink',
};

const UserFeedback = () => {

  const [userList, setUserList] = useState([])

  const fetchUserData = () => {
    fetch('http://localhost:5000/feedback/getall')
      .then((response) => {
        if (response.status === 200) {
          response.json()
            .then((result) => {
              console.log(result);
              setUserList(result);
            })
        }
      }).catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchUserData();
  }, [])

  const deleteUser = (id) => {
    fetch('http://localhost:5000/feedback/delete/' + id, {
      method: 'DELETE'
    })
      .then((response) => {
        if (response.status === 200) {
          fetchUserData();
        }
      }).catch((err) => {
        console.log(err);
      });
  }

  const displayUser = () => {
    return (
      <Table.ScrollContainer minWidth={800}>
        <Table verticalSpacing="md">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>User</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Review</Table.Th>
              <Table.Th>Rating</Table.Th>
              <Table.Th>Action</Table.Th>
              <Table.Th />
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
          {
            userList.map((user) => {
              return (
                  <Table.Tr>
                    <Table.Td>{user.name}</Table.Td>
                    <Table.Td>{user.email}</Table.Td>
                    <Table.Td>{user.review}</Table.Td>
                    <Table.Td>{user.rating}</Table.Td>
                    <Table.Td>
                    <Button justify="center" variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }} 
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </Button>
                    </Table.Td>
                  </Table.Tr>
                )
              })
            }
            </Table.Tbody>

        </Table>
      </Table.ScrollContainer>
    )
  }

  const rows = data.map((item) => (
    <Table.Tr key={item.name}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={30} src={item.avatar} radius={30} />
          <Text fz="sm" fw={500}>
            {item.name}
          </Text>
        </Group>
      </Table.Td>

      {/* <Table.Td>
        <Badge color={jobColors[item.job.toLowerCase()]} variant="light">
          {item.job}
        </Badge>
      </Table.Td> */}
      <Table.Td>
        <Anchor component="button" size="sm">
          {item.email}
        </Anchor>
      </Table.Td>
      <Table.Td>
        <Anchor component="button" size="sm">
          {item.review}
        </Anchor>
      </Table.Td>
      <Table.Td>
        <Anchor component="button" size="sm">
          {item.rating}
        </Anchor>
      </Table.Td>
      <Table.Td>
        <Group gap={0} justify="flex-end">
          <ActionIcon variant="subtle" color="gray">
            <IconPencil style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="subtle" color="red">
            <IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Container>
    <div style={{ marginTop: '50px' }}>
      {
        displayUser()
      }
    </div>
    </Container>
  );
}

export default UserFeedback;